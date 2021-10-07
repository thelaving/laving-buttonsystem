## Button System Kurulum

```js
let config = {
"vk": "Vampir Köylü Rol ID",
"gartic": "Gartic Rol ID",
"dc": "Doğruluk Cesaretlik Rol ID",
"botOwner": "Bot Yapımcısı Rol ID",
"token": "Burada token işte?"
};

``` 
 * Bu kısımları doldurduktan sonra artık sıra bu kısımda;

```js 
client.on("ready", async () => {
    client.user.setPresence({ activity: { name: "• Laving ❤️ " }, status: "online" });
  });  
  
  client.on('ready', ()=>{
    client.channels.cache.get('SES KANALI ID ').join()
    })
```

* Bu kısımlarda dolduktan sonra botumuz hazır hale gelecektir artık yapmamız gerekenler çok kolay! Konsola girip modülleri indirdikten sonra `node lavingbutton` komutuyla botu çalıştırabilirsiniz.

## Ayrıca;

* Bot %100 şahsıma aittir ve çalma durumunda direk telif haklarına başvurulucaktır. 

* Yardım almak için Laving#0001 ekleyebililirsiniz.
* Ayrıca botta yapıyorum discorddan ekleyerek ulaşabilirsiniz. İyi Eğlenceler!
