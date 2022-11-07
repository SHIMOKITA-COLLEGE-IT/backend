import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagUpdateWithoutProfilesInput } from './tag-update-without-profiles.input';
import { TagCreateWithoutProfilesInput } from './tag-create-without-profiles.input';

@InputType()
export class TagUpsertWithWhereUniqueWithoutProfilesInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: TagWhereUniqueInput;

    @Field(() => TagUpdateWithoutProfilesInput, {nullable:false})
    @Type(() => TagUpdateWithoutProfilesInput)
    update!: TagUpdateWithoutProfilesInput;

    @Field(() => TagCreateWithoutProfilesInput, {nullable:false})
    @Type(() => TagCreateWithoutProfilesInput)
    create!: TagCreateWithoutProfilesInput;
}
