import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoCoWhereInput } from './co-co-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCoCoArgs {

    @Field(() => CoCoWhereInput, {nullable:true})
    @Type(() => CoCoWhereInput)
    where?: CoCoWhereInput;
}
