import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MyRootsUpdateInput } from './my-roots-update.input';
import { Type } from 'class-transformer';
import { MyRootsWhereUniqueInput } from './my-roots-where-unique.input';

@ArgsType()
export class UpdateOneMyRootsArgs {

    @Field(() => MyRootsUpdateInput, {nullable:false})
    @Type(() => MyRootsUpdateInput)
    data!: MyRootsUpdateInput;

    @Field(() => MyRootsWhereUniqueInput, {nullable:false})
    @Type(() => MyRootsWhereUniqueInput)
    where!: MyRootsWhereUniqueInput;
}
