export default function SnackList() {
  const snacks = [
    { name: 'KitKat', rank: 5 },
    { name: 'Strawberry Milk', rank: 4 },
    { name: 'Chocolate Almonds', rank: 3 },
    { name: 'Mixed Fresh Fruit Cup', rank: 2 },
    { name: 'Banana w PB Milkshake', rank: 1 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnacks.map((snack) => (
        <li key={snack.rank}>{snack.name}</li>
      ))}
    </ol>
  );
}
