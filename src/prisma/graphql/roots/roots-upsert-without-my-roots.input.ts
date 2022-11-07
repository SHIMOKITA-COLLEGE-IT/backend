import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RootsUpdateWithoutMyRootsInput } from './roots-update-without-my-roots.input';
import { Type } from 'class-transformer';
import { RootsCreateWithoutMyRootsInput } from './roots-create-without-my-roots.input';

@InputType()
export class RootsUpsertWithoutMyRootsInput {

    @Field(() => RootsUpdateWithoutMyRootsInput, {nullable:false})
    @Type(() => RootsUpdateWithoutMyRootsInput)
    update!: RootsUpdateWithoutMyRootsInput;

    @Field(() => RootsCreateWithoutMyRootsInput, {nullable:false})
    @Type(() => RootsCreateWithoutMyRootsInput)
    create!: RootsCreateWithoutMyRootsInput;
}
