import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RootsUpdateInput } from './roots-update.input';
import { Type } from 'class-transformer';
import { RootsWhereUniqueInput } from './roots-where-unique.input';

@ArgsType()
export class UpdateOneRootsArgs {

    @Field(() => RootsUpdateInput, {nullable:false})
    @Type(() => RootsUpdateInput)
    data!: RootsUpdateInput;

    @Field(() => RootsWhereUniqueInput, {nullable:false})
    @Type(() => RootsWhereUniqueInput)
    where!: RootsWhereUniqueInput;
}
