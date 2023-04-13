interface Buyer {
  name: string;
  id: number;
}
const users: Buyer[] = [
  { name: "bob", id: 1 },
  { name: "alice", id: 2 },
  { name: "mallory", id: 3 },
];
interface BoughtCars {
  buyer: Buyer;
  model: string;
  year: number;
}
const boughtCars: BoughtCars[] = [
  { buyer: { name: "alice", id: 2 }, model: "i20", year: 2020 },
];
