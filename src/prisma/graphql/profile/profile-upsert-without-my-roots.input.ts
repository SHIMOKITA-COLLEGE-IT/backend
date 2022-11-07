import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateWithoutMyRootsInput } from './profile-update-without-my-roots.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutMyRootsInput } from './profile-create-without-my-roots.input';

@InputType()
export class ProfileUpsertWithoutMyRootsInput {

    @Field(() => ProfileUpdateWithoutMyRootsInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutMyRootsInput)
    update!: ProfileUpdateWithoutMyRootsInput;

    @Field(() => ProfileCreateWithoutMyRootsInput, {nullable:false})
    @Type(() => ProfileCreateWithoutMyRootsInput)
    create!: ProfileCreateWithoutMyRootsInput;
}
