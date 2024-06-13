const items = [
  {
    title: "Strona główna | Home",
    path: "/",
  },
  {
    title: "Przepisy | Recipes",
    path: "/RecipeList",
  },
];

export const NavItems = () => {
  return (
    <ul className="flex flex-col lg:flex-row lg:gap-3">
      {items.map(item => (
        <li key={item.title}>
          <a
            href={item.path}
            className="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
