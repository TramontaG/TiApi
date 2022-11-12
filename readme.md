# TiApi: the first TDZAAS (Tia Do Zap As A Service) as far as I know

## Motivation:

I personally don't have a Tia Do Zap that sends me messages every single day. So I decided to create my own Tia Do Zap. It will be used with my [Whatsapp bot](https://github.com/TramontaG/Gramonta-bot) in order to send "Good Morning" messages for all my friends.

## How it works

This is a web scraper API that will give you texts and images from websites such as  [this](https://mundodasmensagens.com.br/) (`https://mundodasmensagens.com.br/`). I made this API in a way that's easy to add more websites for scraping, all we need is to provide a website, an image-getter function and a text-getter function. More websites will be added soon!

## Usage example:

For `https://mundodasmensagens.com.br/` any endpoint after `mundodasmensagens` will try to resolve to the same path.

For example: `${BASE_URL}/mundodasmensagens/mensagens-bom-dia` resolves to `https://mundodasmensagens.com.br/mensagens-bom-dia`

It also accepts an optional query param `page`.

```typescript
//[GET]: `${BASE_URL}/mundodasmensagens/mensagens-feliz-aniversario?page=3`
//[RESOLVES TO]: `https://mundodasmensagens.com.br/mensagens-feliz-aniversario/3/`

return {
    texts: string[],
    image: {
        src: string,
        alt: string,
    }
}
```
## Resolvement List:
```typescript
{
    `${BASE_URL}/mundodasmensagens/${endpoint}`:    `https://www.mundodasmensagens.com.br/${endpoint}`
    `${BASE_URL}/mensagenscomamor/${endpoint}`:     `https://www.mensagenscomamor.com/${endpoint}`
    `${BASE_URL}/belasmensagens/${endpoint}`:       `https://www.belasmensagens.com.br/${endpoint}`
}
```


# Setup:

It sets up just like any node project, however it has some quirks. You should compile typescript with `ttsc` instead of `tsc` because of the plugin for translating non-relative imports.

- clone the repository
- run `yarn` or `npm install`
- run `yarn start` or `npm run start`

For compilation in watch mode and nodemon, you can run `yarn dev` or `npm run dev`

The project should be ready for deploy. Any automated system will run `yarn install && yarn start`. It just works!'
