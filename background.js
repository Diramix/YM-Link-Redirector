chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      const url = details.url;
  
      // Проверяем, что запрос сделан вручную (например, вставлен в адресную строку)
      if (details.type === "main_frame" && url.includes("https://music.yandex.ru/")) {
        // Подменяем ссылку на yandexmusic://
        const modifiedLink = url.replace("https://music.yandex.ru/", "yandexmusic://");
        console.log(`Перехват ссылки: ${url} -> ${modifiedLink}`);
  
        return { redirectUrl: modifiedLink };
      }
    },
    { urls: ["*://music.yandex.ru/*"] },
    ["blocking"]
  );
  