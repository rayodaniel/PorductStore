import Button from "@/app/atoms/button/button";
import Chip from "@/app/atoms/chip/chip";
import { Product } from "@/shared/models/products/products";

export default function DetailCard({ product, onClickUpdate }: { product: Product; onClickUpdate: (e: React.MouseEvent<HTMLButtonElement>) => void }) {
    return (
        <div className="flex flex-col justify-center items-start w-[100%] ">
            <section>
                <div className="title text-black text-2xl">{product.title}</div>
                <div className="title my-4">
                    <label htmlFor="category">Categoria: </label>
                    {product.category}
                </div>
                <div className="price my-4">
                    <Chip text={product.price.toString()} />
                </div>
            </section>
            <section>
                <div className="descripcion">{product.description}</div>
            </section>
            <Button text="Actualizar" onClickUpdate={(e) => onClickUpdate?.(e)} />
        </div>
    );
}