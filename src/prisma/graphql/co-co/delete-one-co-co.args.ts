import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoCoWhereUniqueInput } from './co-co-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneCoCoArgs {

    @Field(() => CoCoWhereUniqueInput, {nullable:false})
    @Type(() => CoCoWhereUniqueInput)
    where!: CoCoWhereUniqueInput;
}
