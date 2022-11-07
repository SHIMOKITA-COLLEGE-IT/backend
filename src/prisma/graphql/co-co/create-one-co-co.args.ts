import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoCoCreateInput } from './co-co-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCoCoArgs {

    @Field(() => CoCoCreateInput, {nullable:false})
    @Type(() => CoCoCreateInput)
    data!: CoCoCreateInput;
}
