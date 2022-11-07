import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RootsWhereUniqueInput } from './roots-where-unique.input';
import { Type } from 'class-transformer';
import { RootsCreateInput } from './roots-create.input';
import { RootsUpdateInput } from './roots-update.input';

@ArgsType()
export class UpsertOneRootsArgs {

    @Field(() => RootsWhereUniqueInput, {nullable:false})
    @Type(() => RootsWhereUniqueInput)
    where!: RootsWhereUniqueInput;

    @Field(() => RootsCreateInput, {nullable:false})
    @Type(() => RootsCreateInput)
    create!: RootsCreateInput;

    @Field(() => RootsUpdateInput, {nullable:false})
    @Type(() => RootsUpdateInput)
    update!: RootsUpdateInput;
}
