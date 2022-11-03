const getDeepLinkUrl = (url) =>
  `exp+expo-dev-client-deeplinking-mre://expo-development-client/?url=${encodeURIComponent(
    url
  )}`;

const getDevLauncherPackagerUrl = (platform) =>
  `http://localhost:8081/index.bundle?platform=${platform}&dev=true&minify=false&disableOnboarding=1`;

const sleep = (t) => new Promise((res) => setTimeout(res, t));

describe("Deep linking", () => {
  it("should open app and land on home screen", async () => {
    console.log(getDeepLinkUrl(getDevLauncherPackagerUrl("ios")));
    await device.launchApp({
      url: getDeepLinkUrl(getDevLauncherPackagerUrl("ios")),
      newInstance: true,
    });
    await waitFor(element(by.text("Hello world")))
      .toBeVisible()
      .withTimeout(3000);
  });
});
