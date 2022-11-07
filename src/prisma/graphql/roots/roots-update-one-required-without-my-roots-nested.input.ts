import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RootsCreateWithoutMyRootsInput } from './roots-create-without-my-roots.input';
import { Type } from 'class-transformer';
import { RootsCreateOrConnectWithoutMyRootsInput } from './roots-create-or-connect-without-my-roots.input';
import { RootsUpsertWithoutMyRootsInput } from './roots-upsert-without-my-roots.input';
import { RootsWhereUniqueInput } from './roots-where-unique.input';
import { RootsUpdateWithoutMyRootsInput } from './roots-update-without-my-roots.input';

@InputType()
export class RootsUpdateOneRequiredWithoutMyRootsNestedInput {

    @Field(() => RootsCreateWithoutMyRootsInput, {nullable:true})
    @Type(() => RootsCreateWithoutMyRootsInput)
    create?: RootsCreateWithoutMyRootsInput;

    @Field(() => RootsCreateOrConnectWithoutMyRootsInput, {nullable:true})
    @Type(() => RootsCreateOrConnectWithoutMyRootsInput)
    connectOrCreate?: RootsCreateOrConnectWithoutMyRootsInput;

    @Field(() => RootsUpsertWithoutMyRootsInput, {nullable:true})
    @Type(() => RootsUpsertWithoutMyRootsInput)
    upsert?: RootsUpsertWithoutMyRootsInput;

    @Field(() => RootsWhereUniqueInput, {nullable:true})
    @Type(() => RootsWhereUniqueInput)
    connect?: RootsWhereUniqueInput;

    @Field(() => RootsUpdateWithoutMyRootsInput, {nullable:true})
    @Type(() => RootsUpdateWithoutMyRootsInput)
    update?: RootsUpdateWithoutMyRootsInput;
}
