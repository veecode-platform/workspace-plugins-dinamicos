import useAsync from 'react-use/lib/useAsync';
import { useApi, identityApiRef } from '@backstage/core-plugin-api';
import { LinkButton, InfoCard } from '@backstage/core-components'
import { Input } from '@material-ui/core';
import { useEffect, useState } from 'react';



export const EntityTabComponent = () => {
    //const [inputvalue, setInputValue] = useState('')
    //const identityApi = useApi(identityApiRef);
    //const [click, setclick] = useState(0)
    //useAsync(async (): Promise<any> => {
    //    const { token } = await identityApi.getCredentials();
//
    //    await fetch('http://localhost:7007/api/workshop/todos', {
    //        method: 'POST',
    //        headers: {
    //            'Content-Type': 'application/json',
    //            Authorization: `Bearer ${token}`,
    //        },
    //        body: JSON.stringify({
    //            title: inputvalue,
    //        })
    //    })
//
    //    return [];
    //}, [click]);

    return (
        <div>
            <h1>Workshop Entity Tab</h1>
            <p>Aba customizavel para o workshop.</p>
            <p>Usamos React para contruir dentro dessa aba, dashboards integrados, tabelas, relatorios, etc...</p>

            {/*<InfoCard title="Create todo" >
                <Input
                    placeholder="Todo title"
                    style={{ marginBottom: '20px', width: '160px' }}
                    value={inputvalue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <LinkButton to='' onClick={() => setclick(prevClick => prevClick + 1)}>Create</LinkButton>
            </InfoCard>*/}


        </div>
    )
}