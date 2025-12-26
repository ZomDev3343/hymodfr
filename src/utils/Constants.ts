function getAssetPath(path: string) {
  return "./assets/" + path;
}

function getImagePath(path: string) {
  return getAssetPath("images/" + path);
}

function getDocPath(path: string) {
  return "./docs/" + path + ".md";
}

export const IMAGES = {
  BACKGROUND_CARROUSEL: [
    getImagePath("wallpapers/wp1.jpg"),
    getImagePath("wallpapers/wp2.png"),
    getImagePath("wallpapers/wp3.jpg"),
    getImagePath("wallpapers/wp4.png"),
  ],
  LOGO_LG: getImagePath("logo.png"),
  LOGO_SM: getImagePath("logo-small.png"),
};

export const DOCS = {
  TEST: getDocPath("test"),
};
