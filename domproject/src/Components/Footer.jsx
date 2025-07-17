// src/components/Footer.jsx

export default function Footer()
{
  return (
    <div className="bg-gray-100 text-center py-4 mt-auto">
      <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
    </div>
  );
};

