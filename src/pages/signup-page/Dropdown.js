import { Select, InputLabel, FormControl, MenuItem } from '@material-ui/core'

const Dropdown = ({title, name, oc, listdp}) => {
    const listDropdown = [
        [ 'Etudiant', 'Formateur'], 
        [ 'Paris', 'Lille'], 
        [ 'FullStacks', 'Cybersecurité', 'DevOps', 'Reseaux', 'NewTech' ], 
        [ 'Premiere', 'Deuxieme', 'Troisieme', 'Quatrieme', 'Cinquieme' ]
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

export default Dropdown