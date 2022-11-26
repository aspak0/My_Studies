//* Call Back ;

const brands = [
  { name: "Apple", company: "Technology" },
  { name: "Facebook", company: "Tech & social-media" },
];
const getDetails = () => {
  setTimeout(() => {
    let result = "";
    brands.forEach((brand, index) => {
      result += `* ${brand.name} `;
      result += `: ${brand.company} `;
    });
    console.log(result);
  }, 1000);
};
getDetails();
