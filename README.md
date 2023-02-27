# fekoneko blog

My second React project. This time it's a blog site :)

## Preview on GitHub Pages

https://fekoneko.github.io/fekoneko-blog/
Note: here you cannot change posts

## Functions available at the moment:

- Viewing, creating, editing and deleting posts
- Search
- Multiple language support (English/Russian/Japanese)
- Theme choice (dark/light)

## Important!

- use `npm run dev` to run the application in development mode
- use `npm json-server -p 3500 -w <JSON data location>` to run test server, you may choose your own location as the last argument or use shortcut `npm run start-server` to watch JSON data in `db.json`
- get started with this JSON data file:

```json
{
  "posts": [
    {
      "title": "Hello World!",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ratione quae ad, harum optio esse dignissimos officia a? Quas accusantium iure at quibusdam, excepturi exercitationem mollitia assumenda aspernatur perferendis vitae! Animi fugiat ducimus dolor sed cum officiis alias saepe molestias, ab soluta consequuntur magnam, quaerat error voluptate architecto? Fugiat, magnam fugit deserunt ducimus recusandae ea atque totam dolorum culpa libero? Cum ratione accusamus laboriosam ipsa corporis aspernatur exercitationem ducimus reiciendis aperiam fugit! A, sequi omnis hic dolor esse pariatur iure quam quibusdam velit magnam ducimus tempora reiciendis animi. Optio, enim! Aspernatur ea, nulla laudantium quo reprehenderit perferendis ullam dolorum provident dolore ex alias velit consequuntur pariatur saepe laborum, voluptatum praesentium. Rem fuga magnam beatae deserunt, qui facilis atque quam cum. Eligendi id alias ipsum labore. Tempora exercitationem quae laboriosam minima adipisci deserunt molestias est in saepe unde molestiae eius labore, dicta perspiciatis cumque rem itaque quaerat harum architecto numquam suscipit.",
      "author": "fekoneko",
      "publishTime": 1675823314980,
      "id": 1
    },
    {
      "title": "Welcome to my blog!",
      "content": "Saepe. Sed totam voluptatibus alias quisquam maiores, laborum assumenda nesciunt obcaecati vitae et nihil omnis ex, odit rem praesentium, quam facilis voluptatum reiciendis consectetur voluptatem quis sit at labore eum! Delectus? Blanditiis earum quas, libero ullam recusandae consequuntur praesentium adipisci ipsam velit, suscipit nemo veniam voluptatibus tempore inventore, quam obcaecati. Fuga non accusamus labore? Magni, necessitatibus. Illum suscipit quisquam amet quod! Assumenda, vitae nam. Doloremque, quos! Accusantium cum, nam commodi ab repudiandae eaque labore omnis. Atque quisquam aut iure. Est perspiciatis pariatur aperiam saepe autem eveniet aliquam suscipit dolor. Ullam, dicta. Repudiandae odio, iste repellendus amet inventore ducimus laborum assumenda soluta quasi optio. Impedit, dolorum sequi consectetur cumque obcaecati tenetur possimus necessitatibus, optio reprehenderit minus nesciunt vero, iure ducimus saepe quos! Eveniet error iste itaque nam magni reprehenderit.",
      "author": "fekoneko",
      "publishTime": 1675823314980,
      "id": 2
    },
    {
      "title": "It's a beautiful day today, isn't it?",
      "content": "Aut minima repellendus vero alias natus numquam quisquam! Quia recusandae unde distinctio maxime possimus eveniet laborum, iste iusto sunt, tempora illo nesciunt perspiciatis inventore modi provident totam temporibus quae alias! Adipisci quod iste dolores quo voluptatum ut recusandae. Voluptatem cum, explicabo ex mollitia quaerat aperiam maxime libero, beatae id optio reiciendis a fugit deleniti ab ad cupiditate, natus qui debitis adipisci! Labore eligendi aut, dolorem perspiciatis molestias doloremque? Praesentium illo cum dolorum laudantium fugit consequatur exercitationem temporibus architecto iure, magnam labore quod amet ipsum vel, expedita sunt nesciunt tenetur perferendis, commodi illum eum consectetur minima earum sequi. Architecto. Quibusdam eum dolorem autem dolores beatae!",
      "author": "fekoneko",
      "publishTime": 1675823314980,
      "id": 3
    }
  ]
}
```
