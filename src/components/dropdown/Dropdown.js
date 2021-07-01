import { Select, InputLabel, FormControl, MenuItem } from '@material-ui/core'

export function Dropdown({title, name, oc, listdp}){
    const listDropdown = [
        [ 'Étudiant', 'Formateur'], 
        [ 'Paris', 'Lille'], 
        [ 'FullStack', 'Cybersécurité', 'DevOps', 'Réseaux', 'NewTech' ], 
        [ 'Première', 'Deuxième', 'Troisième', 'Quatrième', 'Cinquième' ]
      ]
    return (
        <>
            <FormControl className="w-full">
                <InputLabel id={name} className="mx-4">{title}</InputLabel>
                <Select className="w-full px-4 mb-3" defaultValue="" name={name} onChange={oc}>
                {listDropdown[listdp].map((label, index) => (
                    <MenuItem value={label} key={index}>{label}</MenuItem>
                ))}
                </Select>
            </FormControl>
        </>
    )
}
