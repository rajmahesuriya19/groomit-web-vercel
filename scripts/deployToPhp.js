import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, "../.env");
const distPath = path.join(process.cwd(), "dist");
console.log("React dist path:", distPath);

const phpPublicPath = path.resolve(__dirname, "../../web-app/public");
const phpReactPath = path.join(phpPublicPath, "react");
const phpAssetsPath = path.join(phpPublicPath, "assets");

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function updateEnvHost(value) {
    let envContent = fs.readFileSync(envPath, "utf8");

    envContent = envContent.replace(
        /VITE_API_HOST=.*/g,
        `VITE_API_HOST=${value}`
    );

    fs.writeFileSync(envPath, envContent);

    console.log(`ENV updated: VITE_API_HOST=${value}`);
}

function deleteFolder(folderPath) {
    if (fs.existsSync(folderPath)) {
        fs.rmSync(folderPath, { recursive: true, force: true });
        console.log(`Deleted: ${folderPath}`);
    } else {
        console.log(`Folder not found: ${folderPath}`);
    }
}

function copyFolder(src, dest) {
    fs.mkdirSync(dest, { recursive: true });

    const files = fs.readdirSync(src);

    for (const file of files) {
        const srcFile = path.join(src, file);
        const destFile = path.join(dest, file);

        if (fs.lstatSync(srcFile).isDirectory()) {
            copyFolder(srcFile, destFile);
        } else {
            fs.copyFileSync(srcFile, destFile);
        }
    }
}

async function deploy() {
    try {
        console.log("STEP 0: Updating ENV for build...");
        updateEnvHost("/");

        console.log("⏳ Waiting 5 seconds before build...");
        await sleep(5000);

        console.log("STEP 1: Running React build...");
        execSync("vite build", { stdio: "inherit", shell: true });

        console.log("STEP 2: Deleting old assets...");
        deleteFolder(phpAssetsPath);

        console.log("STEP 3: Deleting old react files...");
        deleteFolder(phpReactPath);

        console.log("⏳ Waiting 5 seconds before copying new files...");
        await sleep(5000);

        console.log("STEP 4: Copying new build files...");

        const distFiles = fs.readdirSync(distPath);

        for (const file of distFiles) {
            const src = path.join(distPath, file);

            if (file === "assets") {
                console.log("Copying assets folder...");
                copyFolder(src, phpAssetsPath);
            } else {
                fs.mkdirSync(phpReactPath, { recursive: true });
                const dest = path.join(phpReactPath, file);

                if (fs.lstatSync(src).isDirectory()) {
                    copyFolder(src, dest);
                } else {
                    fs.copyFileSync(src, dest);
                }
            }
        }

        console.log("STEP 5: Restoring ENV...");
        updateEnvHost("https://qa.groomit.me/");

        console.log("✅ Deployment completed successfully.");
    } catch (error) {
        console.error("❌ Deployment failed:", error);

        // 🔥 VERY IMPORTANT: restore env even if build fails
        updateEnvHost("https://qa.groomit.me/");
    }
}

deploy();