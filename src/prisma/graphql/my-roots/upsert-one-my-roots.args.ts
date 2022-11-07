import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MyRootsWhereUniqueInput } from './my-roots-where-unique.input';
import { Type } from 'class-transformer';
import { MyRootsCreateInput } from './my-roots-create.input';
import { MyRootsUpdateInput } from './my-roots-update.input';

@ArgsType()
export class UpsertOneMyRootsArgs {

    @Field(() => MyRootsWhereUniqueInput, {nullable:false})
    @Type(() => MyRootsWhereUniqueInput)
    where!: MyRootsWhereUniqueInput;

    @Field(() => MyRootsCreateInput, {nullable:false})
    @Type(() => MyRootsCreateInput)
    create!: MyRootsCreateInput;

    @Field(() => MyRootsUpdateInput, {nullable:false})
    @Type(() => MyRootsUpdateInput)
    update!: MyRootsUpdateInput;
}
