import {writeFile,readFile} from 'fs/promises'
import {alunos} from './AlunosData'

export class Alunos {
    private dataSource = alunos

    getDataSource(){
        return this.dataSource
    }

    writeAlunos(){
        try{
            writeFile('alunosDataSource.json', JSON.stringify(this.dataSource))
        }
        catch(err){
            console.error('erro na escrita',err);
        }
    }

    async readAlunosDataSource(){
        const readAlunos = await readFile('AlunosDataSource.json', "utf8")

        return readAlunos
    }
}