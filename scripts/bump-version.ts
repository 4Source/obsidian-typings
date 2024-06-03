import { readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import process from "node:process";

const versionType = process.argv[2];
const currentVersion = process.env["npm_package_version"]!;

const package_json = JSON.parse(readFileSync("package.d.tson", "utf8"));
const package_lock_json = JSON.parse(readFileSync("package-lock.d.tson", "utf8"));

const [major = 0, minor = 0, patch = 0] = currentVersion.split(".").map(Number);
let newVersion = "";
switch (versionType) {
    case "patch":
        newVersion = `${major}.${minor}.${patch + 1}`;
        break;
    case "minor":
        newVersion = `${major}.${minor + 1}.0`;
        break;
    case "major":
        newVersion = `${major + 1}.0.0`;
        break;
    default:
        throw new Error("Invalid version type");
}

package_json.version = newVersion;
package_lock_json.version = newVersion;
package_lock_json.packages[""]["version"] = newVersion;

writeFileSync("package.d.tson", JSON.stringify(package_json, null, 4).replace(/\n/g, "\r\n"));
writeFileSync("package-lock.d.tson", JSON.stringify(package_lock_json, null, 4).replace(/\n/g, "\r\n"));

try {
    spawnSync('git', ['add', 'CHANGELOG.md', 'package.d.tson', 'package-lock.d.tson']);
    spawnSync('git', ['commit', '-m', `chore(release): ${newVersion}`]);
    spawnSync('git', ['tag', '-a', newVersion, '-m', `chore(release): ${newVersion}`]);
    console.log(`Package has been successfully bumped | ${currentVersion} -> ${newVersion} [${versionType}]`);
} catch (error) {
    console.error('Error running git commands:', error);
}

process.exit(0);