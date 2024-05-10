interface IFruit {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface ICart {
  id: number;
  userId: string;
  fruitId: 1;
  quantity: 3;
  fruit: IFruit;
}

interface ICheckout {
  count: number;
  message: string;
}
