import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoCoUpdateInput } from './co-co-update.input';
import { Type } from 'class-transformer';
import { CoCoWhereUniqueInput } from './co-co-where-unique.input';

@ArgsType()
export class UpdateOneCoCoArgs {

    @Field(() => CoCoUpdateInput, {nullable:false})
    @Type(() => CoCoUpdateInput)
    data!: CoCoUpdateInput;

    @Field(() => CoCoWhereUniqueInput, {nullable:false})
    @Type(() => CoCoWhereUniqueInput)
    where!: CoCoWhereUniqueInput;
}
