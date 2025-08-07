import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'csv-parse/sync';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 状态文本映射
const statusTextMap = {
    'dev': '开发中',
    'test': '测试中',
    'release': '正式版',
    'deprecated': '已弃用'
};

// 处理项目数据，生成依赖字段
function processProjects(projects) {
    return projects.map(project => {
        // 根据repoName生成icon和preview路径
        const icon = `/projects/icon/${project.repoName}.ico`;
        const preview = `/projects/preview/${project.repoName}.png`;

        // 根据link生成linkText
        let linkText = project.link;
        try {
            const url = new URL(project.link);
            linkText = url.hostname + url.pathname;
        } catch (e) {
            // 如果不是有效的URL，使用原始link
        }

        // 根据status生成statusText
        const statusText = statusTextMap[project.status] || project.status;

        // 生成 shields.io badge URL
        let badgeUrl = `https://img.shields.io/github/last-commit/cup113/${project.repoName}?label="上次更新"`;

        // 返回完整项目对象
        return {
            ...project,
            icon,
            preview,
            linkText,
            statusText,
            badgeUrl
        };
    });
}

// 读取CSV文件并转换为项目数据
function parseProjects() {
    const csvPath = path.resolve(__dirname, './projects.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');

    const records = parse(csvContent, {
        columns: true,
        skip_empty_lines: true
    });

    // 处理tags字段，将其从字符串转换为数组
    const projects = records.map(record => {
        return {
            ...record,
            tags: record.tags ? record.tags.split(',').map(tag => tag.trim()) : []
        };
    });

    return processProjects(projects);
}

// 生成项目数据文件
function generateProjectsData() {
    const projects = parseProjects();

    const output = `${JSON.stringify(projects, null, 2)}`;

    const outputPath = path.resolve(__dirname, './projects.data.json');
    fs.writeFileSync(outputPath, output);

    console.log('项目数据已生成');
}

generateProjectsData();