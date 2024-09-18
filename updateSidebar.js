const fs = require('fs');
const path = require('path');

// 定义要排除的文件或目录名称
const excludeList = [
    '备忘.md',
];

// 遍历目录，生成文件结构
function generateSidebar(dir, depth = 0, prefix = './md') {
    let result = '';
    const indent = '    '.repeat(depth); // 每一级增加4个空格的缩进

    const files = fs.readdirSync(dir);
    files.forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        const fileName = path.basename(file);

        // 如果文件或目录在排除列表中，跳过
        if (excludeList.includes(fileName)) {
            return;
        }

        if (stat.isDirectory()) {
            result += `${indent}* ${file}\n`; // 添加目录名称
            result += generateSidebar(fullPath, depth + 1, `${prefix}/${file}`);
        } else if (path.extname(file) === '.md') {
            const fileNameWithoutExt = path.basename(file, '.md');
            result += `${indent}* [${fileNameWithoutExt}](${prefix}/${file})\n`; // 添加文件
        }
    });

    return result;
}

// 获取最终的sidebar内容
function getSidebarContent() {
    let content = '';
    content += `* [**备忘**](./md/备忘.md)\n\n`;
    content += generateSidebar(path.join(__dirname, 'md'));
    return content;
}

// 写入_sidebar.md
function writeSidebarFile(content) {
    const sidebarPath = path.join(__dirname, '_sidebar.md');
    fs.writeFileSync(sidebarPath, content, 'utf8');
    console.log('Sidebar has been updated successfully.');
}

// 生成并写入_sidebar.md
const sidebarContent = getSidebarContent();
writeSidebarFile(sidebarContent);