export const Title = ({part1, part2})=>{
    return(
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center capitalize">
            {part1} <span className="text-primary">{part2}</span>
        </h2>
    )
}