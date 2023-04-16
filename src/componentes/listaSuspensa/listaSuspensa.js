import './listaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='listaSuspensa'>
            <label>{props.label}</label> 
            <select required={props.obrigatorio} onChange={(evento) => props.trataCampoAlterado(evento.target.value)}>
                {props.itens.map( item => {
                    return <option key={"ls"+item}>{Array.isArray(item)? item[0] : item}</option>
                })}
            </select>
        </div>
    )
}
export default ListaSuspensa;