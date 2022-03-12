import { FileType } from './FilePreview.types';

export const checkImgURL = (url: string) => {
  return (
    url.match(
      /\.(jpeg|jpg|gif|png|pnm|psd|ppm|ras|tiff|tif|wbmp|xwd|xpm|xbm|bmp|cgm|cr2|cmx|crw|erf|g3|ico|ief|jng|jpe|nef|orf|pbm|pcx|pgm|)$/,
    ) != null
  );
};

export const checkVideoURL = (url: string) => {
  return (
    url.match(
      /\.(mp4|3g2|3gp|asf|asx|avi|axv|dif|dl|f4v|fli|flv|fvt|dv|h261|h263|h264|gl|ifo|jpm|jpgm|jpgv|lsf|lsx|m1v|m2p|m2v|m4v|m4u|mj2|mjp2|mkv|mng|mov|movie|mp4v|mpe|mpeg|mpg4|mpg|mpv|mxu|ogv|qt|rm|ts|viv|vob|wm|wmv|wmx|wvx)$/,
    ) != null
  );
};

export const checkAudioURL = (url: string) => {
  return (
    url.match(
      /\.(m4v|aac|adp|aif|aifc|aiff|amr|ape|au|awb|axa|dts|dtshd|flac|gsm|kar|m2a|m3a|m3u|m4a|mid|midi|mp2|mp2a|mp3|mp4a|mpa|mpega|mpga|oga|ogg|pls|ram|rmi|sd2|sid|snd|spx|wav|wax|wma)$/,
    ) != null
  );
};

export const checkFile = (name: string) => {
  if (checkImgURL(name)) {
    return FileType.image;
  }
  if (checkAudioURL(name)) {
    return FileType.audio;
  }
  if (checkVideoURL(name)) {
    return FileType.video;
  }

  return null;
};
