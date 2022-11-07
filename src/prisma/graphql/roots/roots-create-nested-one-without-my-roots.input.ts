import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RootsCreateWithoutMyRootsInput } from './roots-create-without-my-roots.input';
import { Type } from 'class-transformer';
import { RootsCreateOrConnectWithoutMyRootsInput } from './roots-create-or-connect-without-my-roots.input';
import { RootsWhereUniqueInput } from './roots-where-unique.input';

@InputType()
export class RootsCreateNestedOneWithoutMyRootsInput {

    @Field(() => RootsCreateWithoutMyRootsInput, {nullable:true})
    @Type(() => RootsCreateWithoutMyRootsInput)
    create?: RootsCreateWithoutMyRootsInput;

    @Field(() => RootsCreateOrConnectWithoutMyRootsInput, {nullable:true})
    @Type(() => RootsCreateOrConnectWithoutMyRootsInput)
    connectOrCreate?: RootsCreateOrConnectWithoutMyRootsInput;

    @Field(() => RootsWhereUniqueInput, {nullable:true})
    @Type(() => RootsWhereUniqueInput)
    connect?: RootsWhereUniqueInput;
}
