import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

// Sort order: folders first, then files. Sort folders and files alphabetically

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
