import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateNestedOneWithoutMyRootsInput } from '../profile/profile-create-nested-one-without-my-roots.input';
import { RootsCreateNestedOneWithoutMyRootsInput } from '../roots/roots-create-nested-one-without-my-roots.input';

@InputType()
export class MyRootsCreateWithoutProfilesOnSkillsInput {

    @Field(() => ProfileCreateNestedOneWithoutMyRootsInput, {nullable:false})
    profile!: ProfileCreateNestedOneWithoutMyRootsInput;

    @Field(() => RootsCreateNestedOneWithoutMyRootsInput, {nullable:false})
    roots!: RootsCreateNestedOneWithoutMyRootsInput;

    @Field(() => Date, {nullable:true})
    from?: Date | string;

    @Field(() => Date, {nullable:true})
    to?: Date | string;
}