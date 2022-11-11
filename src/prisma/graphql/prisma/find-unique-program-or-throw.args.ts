import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProgramWhereUniqueInput } from '../program/program-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueProgramOrThrowArgs {

    @Field(() => ProgramWhereUniqueInput, {nullable:false})
    @Type(() => ProgramWhereUniqueInput)
    where!: ProgramWhereUniqueInput;
}
