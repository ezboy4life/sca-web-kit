# SCA Web Kit

Componentes reutilizáveis para projetos de desenvolvimento web do Sistema SCA que utilizam a framework [NextJS](https://nextjs.org/).

## Uso

1. Em seu projeto com NextJS (versão >= 15.0), adicione o pacote através do seu gerenciador de pacotes:

    via HTTPS:

    ```sh
    pnpm install git+https://github.com/ezboy4life/sca-web-kit.git
    ```

    ou via SSH:

    ```sh
    pnpm install git+git@github.com:ezboy4life/sca-web-kit.git
    ```

2. Se o pacote foi instalado com sucesso, basta usar importar os componentes e usá-los em seu código:

    ```typescript
    import { Button } from 'sca-web-kit';

    export default function Home() {
        return (
            <div>
                <Button label='Cadastrar' />
            </div>
        )
    }
    ```
