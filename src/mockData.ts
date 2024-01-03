export interface IComment {
  id: number;
  author: string;
  avatar: string;
  text: string;
  date: string;
  replies?: IComment[];
}

export const comments: IComment[] = [
  {
    id: 1,
    author: "Alice",
    avatar:
      "https://wallpapers.com/images/hd/aesthetic-profile-picture-aqsczeds6fi1a1a3.jpg",
    text: "Great article! I learned a lot about recursion.",
    date: "2023-01-15T10:30:00Z",
    replies: [
      {
        id: 2,
        author: "Bob",
        avatar:
          "https://i0.wp.com/wishes143.com/wp-content/uploads/2023/10/smart-boy-dp.jpg?fit=564%2C564&ssl=1",
        text: "Thanks, Alice! Recursion can be tricky at first, but it's powerful.",
        date: "2023-01-15T11:15:00Z",
        replies: [
          {
            id: 4,
            author: "Charlie",
            avatar: "https://cdn.wallpapersafari.com/49/0/2wPVNZ.jpg",
            text: "I agree, Bob. The examples really helped me understand.",
            date: "2023-01-15T12:00:00Z",
          },
        ],
      },
      {
        id: 3,
        author: "Eve",
        avatar:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/075ed0a9-03c8-453e-8f5e-67fcdf4bb73a/deetjwa-e38ef42d-017e-4b9b-9802-fb65b26425f0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3NWVkMGE5LTAzYzgtNDUzZS04ZjVlLTY3ZmNkZjRiYjczYVwvZGVldGp3YS1lMzhlZjQyZC0wMTdlLTRiOWItOTgwMi1mYjY1YjI2NDI1ZjAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7LCYECbVG2qt5z0dxne07G6_USfJz_AMo455-hEacb4",
        text: "Alice, do you have any resources for further reading on recursion?",
        date: "2023-01-15T11:45:00Z",
      },
    ],
  },
  {
    id: 5,
    author: "David",
    avatar:
      "https://storage.googleapis.com/pai-images/1525e3691b664e3f95eda9c3158a64b1.jpeg",
    text: "Interesting topic! I'll give it a try in my next project.",
    date: "2023-01-16T09:00:00Z",
    replies: [
      {
        id: 6,
        author: "Frank",
        avatar: "https://pbs.twimg.com/media/FD-3nPkakAEwMEN.jpg",
        text: "Let me know if you need any help, David.",
        date: "2023-01-16T10:30:00Z",
      },
      {
        id: 7,
        author: "Grace",
        avatar:
          "https://favim.com/pd/p/orig/2019/01/02/profile-aesthetic-pink-Favim.com-6746677.jpg",
        text: "I used recursion in my last project. It can save a lot of code!",
        date: "2023-01-16T11:45:00Z",
        replies: [
          {
            id: 8,
            author: "Hank",
            avatar:
              "https://is.zobj.net/image-server/v1/images?r=5qmp0M-at42Oe9-aWv08W-hBBegUDgoM_Bep-k-YuAcbr8-84GEcCfyobKQmcASar4k7DquYE9SOs3MyMtZIxolHoeQ3SoRiehK5UlowkVBwK7-D6I8eBKQ4USROH9OyKVY-I6v_dhysDgPDrXS6rODmEx1p-ninfB2qvg3WY07p_JpeTjD-xeXRh0KA3U3Y3__BMHGQd_tCjLCV",
            text: "Agreed, Grace! It makes code elegant and easier to maintain.",
            date: "2023-01-16T12:30:00Z",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    author: "Ivy",
    avatar: "https://favim.com/pd/1tb/preview/8/869/8692/86922/8692203.jpg",
    text: "Thanks for sharing your insights, everyone!",
    date: "2023-01-17T14:15:00Z",
  },
];
