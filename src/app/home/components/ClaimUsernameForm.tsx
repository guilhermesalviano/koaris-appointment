import { Avatar, Box, Button, TextInput } from "@koaris/bloom-ui";
import { GrLinkNext } from "react-icons/gr"


export function ClaimUsernameForm() {
    return (
        <Box className="flex md:flex-col gap-2 mt-4 bg-neutral-200 border-2 border-s-neutral-300">
            <TextInput
                prefix="koaris.com/"
                placeholder="seu-usuário"
                error={false} type={"text"}
            />
            <Button size="sm" type="submit">
                <>
                    <span style={{paddingRight: '1rem'}}>
                    Próximo
                    </span>
                    <GrLinkNext />
                </>
            </Button>
        </Box>
    )
}