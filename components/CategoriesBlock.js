import classnames from "classnames";

function CategoriesBlock () {
    const categoryClass = classnames("bg-clip-border p-6 border-4 border-violet-300 border");
    return (
<div className="grid grid-rows-2 grid-cols-2">
    <div className={categoryClass}>Ropa</div>
    <div className={categoryClass}>Muebles</div>
    <div className={categoryClass}>Comida</div>
    <div className={categoryClass}>Juguetes</div>
</div>
    )
}

export default CategoriesBlock