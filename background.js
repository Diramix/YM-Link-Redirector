chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = details.url;
    
    if (details.type === "main_frame" && url.includes("https://music.yandex.ru/") && url !== "https://music.yandex.ru/" && !url.includes("/home") && !url.includes("/settings")) {
      const modifiedLink = url.replace("https://music.yandex.ru/", "yandexmusic://");
      console.log(`Перехват ссылки: ${url} -> ${modifiedLink}`);
      
      return { redirectUrl: modifiedLink };
    }
  },
  { urls: ["*://music.yandex.ru/*"] },
  ["blocking"]
);
