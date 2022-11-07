import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CoCoWhereUniqueInput } from './co-co-where-unique.input';
import { Type } from 'class-transformer';
import { CoCoCreateInput } from './co-co-create.input';
import { CoCoUpdateInput } from './co-co-update.input';

@ArgsType()
export class UpsertOneCoCoArgs {

    @Field(() => CoCoWhereUniqueInput, {nullable:false})
    @Type(() => CoCoWhereUniqueInput)
    where!: CoCoWhereUniqueInput;

    @Field(() => CoCoCreateInput, {nullable:false})
    @Type(() => CoCoCreateInput)
    create!: CoCoCreateInput;

    @Field(() => CoCoUpdateInput, {nullable:false})
    @Type(() => CoCoUpdateInput)
    update!: CoCoUpdateInput;
}
