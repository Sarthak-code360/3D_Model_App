const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
    const config = await getDefaultConfig(__dirname);
    const { assetExts, sourceExts } = config.resolver;

    config.resolver.assetExts = [...assetExts, 'glb', 'gltf', 'png', 'jpg'];
    config.resolver.sourceExts = [...sourceExts, 'js', 'jsx', 'ts', 'tsx', 'cjs'];

    return config;
})();
