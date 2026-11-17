// Render settings shared by Remotion Studio and the render command.
// Docs: https://www.remotion.dev/docs/config
import { Config } from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg');
Config.setJpegQuality(95);
Config.setCodec('h264');
Config.setPixelFormat('yuv420p'); // Most compatible with Instagram
Config.setCrf(16); // Lower = higher quality (Instagram re-compresses, so start high)
Config.setOverwriteOutput(true);
