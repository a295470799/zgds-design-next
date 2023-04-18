import { useRouter } from "next/router";
import ProductList from "./components/ProductList";

export default function List() {
  const route = useRouter();
  return <ProductList id={route.query.id as string} />;
}
