import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RootsWhereUniqueInput } from './roots-where-unique.input';
import { Type } from 'class-transformer';
import { RootsCreateWithoutMyRootsInput } from './roots-create-without-my-roots.input';

@InputType()
export class RootsCreateOrConnectWithoutMyRootsInput {

    @Field(() => RootsWhereUniqueInput, {nullable:false})
    @Type(() => RootsWhereUniqueInput)
    where!: RootsWhereUniqueInput;

    @Field(() => RootsCreateWithoutMyRootsInput, {nullable:false})
    @Type(() => RootsCreateWithoutMyRootsInput)
    create!: RootsCreateWithoutMyRootsInput;
}
