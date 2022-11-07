import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutMyRootsInput } from './profile-create-without-my-roots.input';

@InputType()
export class ProfileCreateOrConnectWithoutMyRootsInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileCreateWithoutMyRootsInput, {nullable:false})
    @Type(() => ProfileCreateWithoutMyRootsInput)
    create!: ProfileCreateWithoutMyRootsInput;
}
