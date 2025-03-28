"use client";

const TagsSidebar = () => {
  const tags = [
    "Featured", "New", "Teen", "Mature", "Asian",
    "Latina", "White", "Ebony", "BBW", "Petite",
    "Blonde", "Brunette", "Redhead", "Big Boobs",
    "Small Boobs", "Hairy", "Shaved", "Toys",
    "Smoking", "Dancing", "Office", "Stockings"
  ];

  return (
    <aside className="w-64 pr-6">
      <h2 className="font-semibold mb-4">Popular Tags</h2>
      <div className="space-y-2">
        {tags.map((tag) => (
          <button
            key={tag}
            className="block w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-secondary transition-colors"
          >
            {tag}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default TagsSidebar;